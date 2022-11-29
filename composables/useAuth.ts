import { useQuasar } from "quasar";
import { useHttpRequest } from "./useHttpRequest";
export const useAuth = () => {
    const $q = useQuasar();
    const http = useHttpRequest()
    const current_location = useCookie('current_location');
    let loading = false
    return {
        headers: () => ({ Authorization: `token dsfsdfs` }),
        loading,
        login(email:string, password:string ): void {
            loading = true
            http.fetch("login", { method: 'post',body: {email, password}}).then((data: any) => {
                console.log(data)
                if (data.status == 200) {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('logger', JSON.stringify(data.data))
                    window.location.href = '/dashboard'
                        localStorage.setItem('userType', '0')
                    console.log("login succeed")
                }
            }).catch((data:any)=> {
                $q.notify({
                    color: "red-4",
                    textColor: "white",
                    icon: "cloud_done",
                    message: data.data.message,
                  });
            }).finally(()=>loading = false)
        },
        checkLoginStatus: () => http.fetch("verifyToken").then((data: any) => {
            if (data.status == 200) {
                navigateTo(current_location.value ?? "/")
                console.log("login succeed")
            }
        }).catch(() => { navigateTo({path:'/login'}) })
    }
}