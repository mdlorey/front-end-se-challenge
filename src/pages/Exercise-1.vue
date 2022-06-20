<template>
  <!-- You may modify any code above this line -->
  <div class="exercise-1">
    <!-- Please do not modify the code between these comments! -->
    <div class="exercise-1__instructions">
      <h2>
        Exercise 1
      </h2>
      <p>
        You're building an application that has an inbox to display email-like messages between users. Someone else on your team has scaffolded the feature but you've been asked to extend the component to resolve the following user and developer stories, which are stories written from the perspective of someone on your team that might pick up the work later.
      </p>

      <InfoBox>
        <em>Tip:</em> There are many ways to achieve these stories. You should read through the source component to get an understanding of how it works.
      </InfoBox>

      <ul>
        <strong>A user can...</strong>
        <li>
          see when a message is <strong>urgent</strong> (these messages contain a top-level key (<code>message.urgent</code>) to denote this)
        </li>
        <li>
          see previews of messages without opening them
        </li>
        <li>
          delete messages
        </li>
      </ul>

      <ul>
        <strong>A developer can...</strong>
        <li>
          choose to override the styling and contents of the title of the component (for example to change the title from "Inbox" to "My Inbox" or to add a user avatar)
        </li>
        <li>
          change the active color of selected messages
        </li>
      </ul>

      <p>
        Modify the following component as you see fit to accomplish the above stories.
      </p>
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-1__results">
      <InboxList
        accent-color="#B9314F"
        :avatar="avatar"
        :messages="messagingStore.messages"
        title="My Inbox"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import avatar from '@/assets/avatar.gif'
  import InboxList from '@/components/Exercise-1/InboxList.vue'
  import InfoBox from '@/components/InfoBox.vue'
  import { useMessagingStore } from '@/stores/messaging'

  const messagingStore = useMessagingStore()
</script>