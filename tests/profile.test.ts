import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { profileData } from '../src/lib/data/profile.ts';

describe('profileData bio', () => {
  it('should include product building, software engineering, and platform engineering domains', () => {
    assert.ok(profileData.bio, 'Bio must exist');
    const lowerBio = profileData.bio.toLowerCase();

    assert.match(lowerBio, /build.*product/);
    assert.match(lowerBio, /software engineering/);
    assert.match(lowerBio, /platform engineering/);
    assert.match(lowerBio, /devops/);
    assert.match(lowerBio, /mlops/);
    assert.match(lowerBio, /sysadmin/);
  });
});
