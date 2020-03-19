<template>
  <div>
    <UserAvatar />
    <slot name="heading"></slot>
    <slot name="paragraph"></slot>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  components: {
    UserAvatar
  }
}
</script>