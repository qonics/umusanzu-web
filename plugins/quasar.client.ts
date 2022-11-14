import { defineNuxtPlugin } from '#app'
import { Quasar, QPage, QBtn, QToolbarTitle, QToolbar, QCard, QCardSection, QPageContainer, QDrawer,QBtnDropdown,QDate,QMarkupTable
    , QLayout, QList, QHeader, QItemLabel, QIcon, QItemSection, QItem, QTable, QInput, QSelect, QField, QBadge,QAvatar,QSkeleton
    , QSeparator,QTree, QTd,QTr,Notify,QPopupProxy, QSpace, QCheckbox,QForm, QDialog,QCardActions, QTh, QChip, QStepper, QStep, QStepperNavigation, QOptionGroup, QRadio, QUploader, } from 'quasar';

export default defineNuxtPlugin(nuxtApp => {

  const quasarUserOptions = {
    components: {
      QPage,
      QBtn,
      QToolbarTitle,
      QToolbar,
      QCard,
      QPopupProxy,
      QCardSection,
      QCardActions,
      QPageContainer,
      QList,
      QLayout,
      QDrawer,
      QHeader,
      QItemLabel,
      QIcon,
      QItemSection,
      QItem,
      QTable,
      QInput,
      QSelect,
      QField,
      QBadge,
      QAvatar,
      QSeparator,
      QTree,
      QTh,
      QTd,
      QTr,
      QChip,
      QForm,
      QDialog,
      QSpace,
      QBtnDropdown,
      Notify,
      QStepper,
      QStep,
      QStepperNavigation,
      QCheckbox,
      QOptionGroup,
      QRadio,
      QDate,
      QSkeleton,
      QMarkupTable,
      QUploader,
      Quasar
    },
    plugins: {},
  };

  nuxtApp.vueApp.use(Quasar, quasarUserOptions, {
    plugins: {
      Notify
    },
    config: {
      notify: { /* look at QUASARCONFOPTIONS from the API card (bottom of page) */ }
    }
  })

})