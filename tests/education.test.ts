import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('education data and component', () => {
  const dataPath = path.resolve('src/lib/data/education.ts');
  const componentPath = path.resolve('src/lib/components/profile/Education.svelte');

  it('should include all required institutions and details in education data', () => {
    const content = fs.readFileSync(dataPath, 'utf-8');

    const expectedEntries = [
      'Institut Teknologi Padang',
      'Telkom University',
      'PJJ Informatics',
      '2020 - 2021',
      'SMK SMTI Padang',
      'Chemical Engineering',
      'SMPN 1 Lengayang',
      'SDN 36 Rangeh',
      'SDN 17 Pasar Surantih',
      'TK Lancang Kuning II Dumai',
    ];

    for (const entry of expectedEntries) {
      assert.ok(content.includes(entry), `Expected education data to include "${entry}"`);
    }
  });

  it('should import logo assets from $lib/assets/images and have logo files on disk', () => {
    const content = fs.readFileSync(dataPath, 'utf-8');

    const logoFiles = [
      'logo-itp.png',
      'logo-telkom-university.webp',
      'logo-smk-smti-padang.webp',
      'logo-smpn-1-lengayang.webp',
      'logo-sd.webp',
      'logo-tk.webp',
    ];

    for (const file of logoFiles) {
      assert.match(
        content,
        new RegExp(`import\\s+\\w+\\s+from\\s+['"][^'"]*${file}['"]`),
        `Should import ${file}`,
      );
      assert.ok(
        fs.existsSync(path.resolve('src/lib/assets/images', file)),
        `Asset file src/lib/assets/images/${file} must exist`,
      );
    }
  });

  it('should assign logo assets instead of icon strings to all education items', () => {
    const content = fs.readFileSync(dataPath, 'utf-8');

    assert.doesNotMatch(content, /icon\s*:/, 'Education items should use logo images');
  });

  it('should conditionally render optional metadata in Education.svelte', () => {
    const content = fs.readFileSync(componentPath, 'utf-8');

    assert.match(
      content,
      /item\.gpa\s*&&\s*item\.period/,
      'Education.svelte should only render separator when both gpa and period are present',
    );
  });
});
