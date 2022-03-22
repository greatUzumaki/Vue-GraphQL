<template>
  <v-btn @click="getData">button</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { apolloClient } from '@/apollo';
import getUsers from './graphql/users/getUsers.gql';
import { UsersQuery_users } from './generated/UsersQuery';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    getData: async function () {
      const { data }: { data: UsersQuery_users } = await apolloClient.query({
        query: getUsers,
      });
      console.log(data);
    },
  },
});
</script>
