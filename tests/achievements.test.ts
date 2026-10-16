import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { achievements } from '../src/lib/data/achievements.ts';

describe('achievements data', () => {
  it('has non-empty entries with required fields', () => {
    assert.ok(achievements.length > 0);
    for (const a of achievements) {
      assert.ok(a.id && a.title && a.event && a.year);
    }
  });
});
