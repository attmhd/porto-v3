import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('experience logo assets', () => {
  it('should import logo assets instead of using raw src paths', () => {
    const filePath = path.resolve('src/lib/data/experience.ts');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Should not contain raw unbundled paths starting with 'src/'
    assert.doesNotMatch(
      content,
      /logo:\s*['"]src\//,
      'Experience logos must not use raw unbundled "src/" paths'
    );

    // Should import images properly
    assert.match(
      content,
      /import\s+\w+\s+from\s+['"][^'"]*logo-avenir\.png['"]/,
      'Should import logo-avenir.png'
    );
    assert.match(
      content,
      /import\s+\w+\s+from\s+['"][^'"]*logo-orbit-future-academy\.png['"]/,
      'Should import logo-orbit-future-academy.png'
    );
    assert.match(
      content,
      /import\s+\w+\s+from\s+['"][^'"]*logo-stifarm\.png['"]/,
      'Should import logo-stifarm.png'
    );
    assert.match(
      content,
      /import\s+\w+\s+from\s+['"][^'"]*logo-appskep\.jpeg['"]/,
      'Should import logo-appskep.jpeg'
    );
    assert.match(
      content,
      /import\s+\w+\s+from\s+['"][^'"]*logo-bangkit\.png['"]/,
      'Should import logo-bangkit.png'
    );
  });

  it('should not render icon in tech stack tags and not define unused tech icon maps', () => {
    const filePath = path.resolve('src/lib/components/profile/Experience.svelte');
    const content = fs.readFileSync(filePath, 'utf-8');

    assert.doesNotMatch(
      content,
      /<Icon\s+icon=\{getTechIcon\(tag\)\}/,
      'Tech stack tags must not contain tech icon components'
    );
    assert.doesNotMatch(
      content,
      /const techIcons/,
      'Unused techIcons mapping should be removed'
    );
    assert.doesNotMatch(
      content,
      /function getTechIcon/,
      'Unused getTechIcon helper should be removed'
    );
  });
});
