import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { certificates, getCertificateById } from '../src/lib/data/certificates.ts';

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
      assert.ok(typeof cert.issueDate === 'string', 'Certificate must have an issueDate');
      assert.ok(cert.description, 'Certificate must have a description');
    }
  });

  it('should find certificate by id', () => {
    const first = certificates[0];
    const found = getCertificateById(first.id);
    assert.deepEqual(found, first);
  });
});
