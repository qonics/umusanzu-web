<template>
    <div class="q-pa-md" style="max-width: 320px">
      <q-list class="q-pa-md" rounded>
        <q-item class="menu-item active" clickable v-ripple rounded>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
  
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item class="menu-item" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
  
          <q-item-section>Entities</q-item-section>
        </q-item>

        <q-item class="menu-item" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
  
          <q-item-section>Household</q-item-section>
        </q-item>

        <q-item class="menu-item" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="account" />
          </q-item-section>
  
          <q-item-section>Expenses</q-item-section>
        </q-item>

        <q-item class="menu-item" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="people" />
          </q-item-section>
  
          <q-item-section>Users</q-item-section>
        </q-item>
        <q-space />

        
      </q-list>
      <q-item clickable v-ripple class="menu-item" style="position: absolute;bottom: 50px;left: 50px">
          <q-item-section avatar>
            <q-icon color="primary" name="logout" />
          </q-item-section>
  
          <q-item-section>Logout</q-item-section>
        </q-item>
    </div>
  </template>