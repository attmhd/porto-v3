import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('collapsible section hide/expand for Experience and Education', () => {
  const collapsiblePath = path.resolve('src/lib/components/common/CollapsibleSection.svelte');
  const experiencePath = path.resolve('src/lib/components/profile/Experience.svelte');
  const educationPath = path.resolve('src/lib/components/profile/Education.svelte');

  it('should define shared CollapsibleSection component with Hide/Expand toggle', () => {
    assert.ok(fs.existsSync(collapsiblePath), 'CollapsibleSection.svelte must exist');
    const content = fs.readFileSync(collapsiblePath, 'utf-8');

    assert.match(content, /aria-expanded=\{isExpanded\}/, 'Should expose aria-expanded state');
    assert.match(content, /Hide/, 'Should render Hide label when expanded');
    assert.match(content, /Expand/, 'Should render Expand label when collapsed');
    assert.match(content, /@render\s+children\(\)/, 'Should render children snippet');
  });

  it('should use CollapsibleSection in both Experience.svelte and Education.svelte', () => {
    const experienceContent = fs.readFileSync(experiencePath, 'utf-8');
    const educationContent = fs.readFileSync(educationPath, 'utf-8');

    assert.match(
      experienceContent,
      /import\s+CollapsibleSection\s+from\s+['"][^'"]*CollapsibleSection\.svelte['"]/,
      'Experience.svelte should import CollapsibleSection',
    );
    assert.match(
      experienceContent,
      /<CollapsibleSection\s+title="Experience"/,
      'Experience.svelte should wrap content in CollapsibleSection',
    );

    assert.match(
      educationContent,
      /import\s+CollapsibleSection\s+from\s+['"][^'"]*CollapsibleSection\.svelte['"]/,
      'Education.svelte should import CollapsibleSection',
    );
    assert.match(
      educationContent,
      /<CollapsibleSection\s+title="Education"/,
      'Education.svelte should wrap content in CollapsibleSection',
    );
  });
});
