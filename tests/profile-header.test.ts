import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('ProfileHeader metadata layout', () => {
  it('should group social media links in a dedicated right-aligned container', () => {
    const filePath = path.resolve('src/lib/components/profile/ProfileHeader.svelte');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Social media links should be enclosed in a right-aligned container (e.g. ml-auto)
    const socialContainerRegex =
      /<div class="(?=[^"]*ml-auto)(?=[^"]*flex)[^"]*">([\s\S]*?)<\/div>/;
    const match = content.match(socialContainerRegex);

    assert.ok(match, 'Expected a social container with ml-auto class');
    const socialBlock = match[1];

    assert.ok(
      socialBlock.includes('simple-icons:linkedin') || socialBlock.includes('linkedin.com'),
      'LinkedIn should be inside the right-aligned social container',
    );
    assert.ok(
      socialBlock.includes('simple-icons:medium') || socialBlock.includes('medium.com'),
      'Medium should be inside the right-aligned social container',
    );
    assert.ok(
      socialBlock.includes('simple-icons:leetcode') && socialBlock.includes('leetcode.com'),
      'LeetCode icon and link should be inside the right-aligned social container',
    );
  });

  it('should not contain mascot component or container', () => {
    const filePath = path.resolve('src/lib/components/profile/ProfileHeader.svelte');
    const content = fs.readFileSync(filePath, 'utf-8');

    assert.ok(
      !content.includes('ProfileMascot'),
      'ProfileHeader should not import or render ProfileMascot',
    );
    assert.ok(!content.includes('FOX MASCOT'), 'ProfileHeader should not contain mascot section');
  });

  it('should render a hiring chat bubble with tail above the profile photo', () => {
    const filePath = path.resolve('src/lib/components/profile/ProfileHeader.svelte');
    const content = fs.readFileSync(filePath, 'utf-8');

    assert.match(content, /hire\s+me\s+bang/i, 'Should display the hiring message');
    assert.match(content, /data-testid="thought-bubble"/, 'Should render thought bubble');
    assert.match(content, /data-testid="thought-dot-lg"/, 'Should render large thought dot');
    assert.match(content, /data-testid="thought-dot-sm"/, 'Should render small thought dot');
  });
});
