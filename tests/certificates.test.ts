import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { certificates, getCertificateById, toEmbedUrl } from '../src/lib/data/certificates.ts';

describe('certificates data', () => {
  it('should contain a non-empty list of certificates', () => {
    assert.ok(Array.isArray(certificates), 'Certificates must be an array');
    assert.ok(certificates.length > 0, 'Certificates array must not be empty');
  });

  it('each certificate should have valid required fields', () => {
    for (const cert of certificates) {
      assert.ok(cert.id, 'Certificate must have an id');
      assert.ok(cert.title, 'Certificate must have a title');
      assert.ok(cert.issuer, 'Certificate must have an issuer');
    }
  });

  it('should find certificate by id', () => {
    const first = certificates[0];
    const found = getCertificateById(first.id);
    assert.deepEqual(found, first);
  });

  it('pdf, when provided, should be a local .pdf path or an https URL', () => {
    for (const cert of certificates) {
      if (cert.pdf !== undefined) assert.match(cert.pdf, /(\.pdf$)|(^https:\/\/)/i);
    }
  });

  it('toEmbedUrl converts Google Drive share links to /preview', () => {
    assert.equal(
      toEmbedUrl('https://drive.google.com/file/d/abc123/view?usp=sharing'),
      'https://drive.google.com/file/d/abc123/preview',
    );
    assert.equal(toEmbedUrl('/certificates/a.pdf'), '/certificates/a.pdf');
  });
});
