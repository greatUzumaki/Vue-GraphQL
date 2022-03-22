<template>
  <v-btn @click="getData">button</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { apolloClient } from '@/apollo';
import getUsers from './graphql/users/getUsers.gql';
import { UsersQuery, UsersQuery_users } from './generated/UsersQuery';

export default Vue.extend({
  name: 'App',

  data: () => ({}),
  methods: {
    getData: async function () {
      const { data }: { data: UsersQuery } = await apolloClient.query({
        query: getUsers,
      });

      const users: UsersQuery_users[] = data.users;

      console.log(users.map((user) => user.first_name));
    },
  },
});
</script>
