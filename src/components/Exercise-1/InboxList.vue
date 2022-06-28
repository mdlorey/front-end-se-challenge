<template>
  <div class="inbox-list">
    <div class="inbox-list__top-bar">
      <div class="inbox-list__title">
        <img
          v-if="avatar"
          alt="Avatar"
          class="inbox-list__title-avatar"
          :src="avatar"
        >
        {{ selectedMessagesLabel }}
      </div>
      <div class="inbox-list__actions">
        <FontAwesomeIcon
          v-if="selectedMessages.length > 0"
          class="fa-lg"
          :icon="['fas', 'trash-can']"
          @click.prevent="deleteSelectedMessages"
        />
        <FontAwesomeIcon
          class="fa-lg"
          :icon="['fas', 'eye']"
          @click.prevent="showMessagePreview = !showMessagePreview"
        />
        <FontAwesomeIcon class="fa-lg" :icon="['fas', 'search']" />
        <FormKit
          v-model="search"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <FontAwesomeIcon class="fa-lg" :icon="['fas', 'ellipsis-v']" />
      </div>
    </div>

    <div class="inbox-list__messages">
      <MessageItem
        v-for="message in filteredMessages"
        :key="message.id"
        :selected-color="selectedColor"
        :message="message"
        :selected="selectedMessages.includes(message)"
        :show-message-preview="showMessagePreview"
        @update:selected="toggleSelection(message, $event)"
      />
    </div>
  </div>
</template>


<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { computed, PropType, reactive, ref, toRefs } from 'vue'
  import MessageItem from '@/components/Exercise-1/MessageItem.vue'
  import { useMessagingStore } from '@/stores/messaging'
  import { Message } from '@/types/Exercise-1/Message'

  const messagingStore = useMessagingStore()

  const props = defineProps({
    avatar: {
      type: String,
      default: undefined,
    },
    messages: {
      type: Array as PropType<Message[]>,
      default: () => [],
    },
    selectedColor: {
      type: String,
      default: '#76d7c4',
    },
    title: {
      type: String,
      default: 'Inbox',
    },
    titleColor: {
      type: String,
      default: '#76d7c4',
    },
  })

  const { messages, title, titleColor } = toRefs(props)

  let showMessagePreview = ref(false)

  const search = ref('')

  // A user can filter the list of messages in the inbox by typing into an input field.
  // Messages should be filtered on subject, message contents, and sender
  const filteredMessages = computed(() => {
    return messages.value.filter((message) => {
      return message.subject.includes(search.value) || message.message.includes(search.value) || message.from.includes(search.value)
    })
  })

  const selectedMessages: Message[] = reactive([])

  const selectedMessagesLabel = computed(() => selectedMessages.length
    ? `${selectedMessages.length} ${toPlural('message', selectedMessages.length)} selected`
    : title.value)

  function toPlural(word: string, count: number): string {
    return count === 1 ? word : `${word}s`
  }

  function toggleSelection(message: Message, selected: boolean): void {
    unselectMessage(message)

    if (selected) {
      selectMessage(message)
    }
  }

  function selectMessage(message: Message): void {
    selectedMessages.push(message)
  }

  function unselectMessage(message: Message): void {
    const index = selectedMessages.indexOf(message)

    if (index > -1) {
      selectedMessages.splice(index, 1)
    }
  }

  function deleteSelectedMessages(): void {
    // remove the selected messages from store
    messagingStore.remove(selectedMessages)
    // clear local selected messages
    selectedMessages.splice(0, selectedMessages.length)
  }
</script>

<style lang="scss">
.inbox-list {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
}

.inbox-list__top-bar {
  display: flex;
  align-items: center;
  color: white;
  background-color: v-bind(titleColor);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  height: 64px;
  justify-content: space-between;
  padding: 12px 24px;
}

.inbox-list__actions {
  display: flex;
  gap: 24px;

  .svg-inline--fa {
    cursor: pointer;
  }
}

.inbox-list__title {
  font-size: 1.5em;
  font-weight: bold;

  &-avatar {
    max-height: 20px;
  }
}
</style>
