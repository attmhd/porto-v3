import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { paginate } from '../src/lib/utils/pagination.ts';

describe('pagination utility', () => {
  const dummyItems = Array.from({ length: 18 }, (_, i) => `item-${i + 1}`);

  it('calculates total pages and slices items for the first page', () => {
    const result = paginate(dummyItems, 1, 5);

    assert.equal(result.currentPage, 1);
    assert.equal(result.totalPages, 4);
    assert.equal(result.totalItems, 18);
    assert.equal(result.pageSize, 5);
    assert.equal(result.hasPrevPage, false);
    assert.equal(result.hasNextPage, true);
    assert.deepEqual(result.items, ['item-1', 'item-2', 'item-3', 'item-4', 'item-5']);
  });

  it('slices items for middle and last page correctly', () => {
    const page2 = paginate(dummyItems, 2, 5);
    assert.equal(page2.currentPage, 2);
    assert.equal(page2.hasPrevPage, true);
    assert.equal(page2.hasNextPage, true);
    assert.deepEqual(page2.items, ['item-6', 'item-7', 'item-8', 'item-9', 'item-10']);

    const lastPage = paginate(dummyItems, 4, 5);
    assert.equal(lastPage.currentPage, 4);
    assert.equal(lastPage.hasPrevPage, true);
    assert.equal(lastPage.hasNextPage, false);
    assert.deepEqual(lastPage.items, ['item-16', 'item-17', 'item-18']);
  });

  it('clamps invalid page numbers within bounds', () => {
    const clampedLower = paginate(dummyItems, -2, 5);
    assert.equal(clampedLower.currentPage, 1);

    const clampedUpper = paginate(dummyItems, 999, 5);
    assert.equal(clampedUpper.currentPage, 4);
  });

  it('handles empty items array gracefully', () => {
    const emptyResult = paginate([], 1, 5);
    assert.equal(emptyResult.currentPage, 1);
    assert.equal(emptyResult.totalPages, 1);
    assert.equal(emptyResult.totalItems, 0);
    assert.deepEqual(emptyResult.items, []);
  });
});

describe('Projects component pagination markup', () => {
  it('integrates pagination controls and paginate utility in Projects.svelte', () => {
    const filePath = path.resolve('src/lib/components/profile/Projects.svelte');
    const content = fs.readFileSync(filePath, 'utf-8');

    assert.match(
      content,
      /import\s+.*paginate.*from\s+['"].*\/pagination['"]/,
      'Projects.svelte should import pagination utility'
    );
    assert.match(
      content,
      /aria-label=["']Previous page["']/,
      'Projects.svelte should have a previous page button'
    );
    assert.match(
      content,
      /aria-label=["']Next page["']/,
      'Projects.svelte should have a next page button'
    );
  });

  it('defaults pageSize to 10 cards per page', () => {
    const filePath = path.resolve('src/lib/components/profile/Projects.svelte');
    const content = fs.readFileSync(filePath, 'utf-8');

    assert.match(
      content,
      /pageSize\s*=\s*10/,
      'Projects.svelte should default pageSize to 10 cards'
    );
  });
});
