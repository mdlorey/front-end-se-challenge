<template>
  <div class="message-item" :class="classes.item" @click.prevent="toggleActive">
    <div class="message-item__checkbox">
      <FontAwesomeIcon class="fa-lg" :icon="['far', classes.icon]" />
    </div>
    <div>
      <div class="message-item__from">
        {{ message.from }}
      </div>
      <div class="message-item__subject">
        {{ message.subject }}
      </div>
    </div>
    <div class="message-item__timestamp">
      {{ message.timestamp }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { computed, PropType, toRefs } from 'vue'
  import { Message } from '@/types/Exercise-1/Message'

  const props = defineProps({
    accentColor: {
      type: String,
      default: '#76d7c4',
    },
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
    selected: {
      type: Boolean,
    },
  })

  const { accentColor } = toRefs(props)

  const emit = defineEmits<{
    (event: 'update:selected', value: boolean): void,
  }>()

  const classes = computed(() => ({
    item: {
      'message-item--selected': props.selected,
    },
    icon: [props.selected ? 'check-square' : 'square'],
  }))

  function toggleActive(): void {
    emit('update:selected', !props.selected)
  }
</script>

<style lang="scss">
.message-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 24px;
  background-position: center;
  transition: background 800ms;

  &:hover {
    background: rgba(133, 146, 158, 0.05)
      radial-gradient(circle, transparent 1%, rgba(133, 146, 158, 0.05) 1%)
      center/15000%;
  }

  &:active {
    background-color: rgba(133, 146, 158, 0.05);
    background-size: 100%;
    transition: background 0s;
  }
}

.message-item--selected .message-item__from {
  color: v-bind(accentColor);
}

.message-item__checkbox {
  margin: 24px 24px 24px 0;
}

.message-item__from {
  color: #2c3e50;
  font-weight: bold;
  transition: all 250ms;
}

.message-item__subject {
  font-size: 0.85rem;
}

.message-item__timestamp {
  font-size: 0.75rem;
  margin-left: auto;
}
</style>
