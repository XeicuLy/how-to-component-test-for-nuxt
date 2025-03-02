import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, test } from 'vitest';
import Mount from '@/pages/mount.vue';

describe('src/pages/mount.vue', () => {
  test('コンポーネントが正しくマウントされること', async () => {
    const wrapper = await mountSuspended(Mount);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('[data-testid="mount-test"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="mount-test"]').text()).toBe('正しくマウントされるか');
  });
});
