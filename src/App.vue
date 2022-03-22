<template>
  <div>
    <v-btn @click="getData">button</v-btn>
    <div>{{ users.map((user) => user.first_name) }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { apolloClient } from '@/apollo';
import getUsers from './graphql/users/getUsers.gql';
import { UsersQuery, UsersQuery_users } from './generated/UsersQuery';

export default Vue.extend({
  name: 'App',

  data: () => ({
    users: [] as UsersQuery_users[],
  }),
  methods: {
    getData: async function () {
      const { data }: { data: UsersQuery } = await apolloClient.query({
        query: getUsers,
      });

      this.users = data.users;
    },
  },
});
</script>
