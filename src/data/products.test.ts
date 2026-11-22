import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  filterProductsByCategory,
  getFeaturedProducts,
  getProductBySlug,
} from './products';
import {COMPANY_INFO} from './company';

test('every product resolves by slug and has non-empty verified or fallback specs', () => {
  assert.ok(PRODUCTS.length >= 6, 'Expected at least 6 verified product entries');

  for (const product of PRODUCTS) {
    assert.equal(getProductBySlug(product.slug)?.slug, product.slug);
    assert.ok(product.specifications.length >= 8, `${product.slug} should include full spec table`);

    for (const row of product.specifications) {
      assert.ok(row.value.trim().length > 0, `${product.slug}:${row.label} cannot be empty`);
      if (!row.verified) {
        assert.equal(
          row.value,
          COMPANY_INFO.specFallback,
          `${product.slug}:${row.label} must use exact fallback wording`,
        );
      }
    }
  }
});

test('category filtering returns exact matches and all returns full catalog', () => {
  assert.equal(filterProductsByCategory('all').length, PRODUCTS.length);

  for (const category of PRODUCT_CATEGORIES) {
    if (category.id === 'all') {
      continue;
    }
    const filtered = filterProductsByCategory(category.id);
    assert.ok(filtered.length >= 1, `Category ${category.id} should contain at least one product`);
    for (const item of filtered) {
      assert.equal(item.categoryId, category.id);
    }
  }
});

test('featured products and unknown slug lookup behave deterministically', () => {
  const featured = getFeaturedProducts();
  assert.equal(featured.length, 4);
  assert.equal(getProductBySlug('non-existent-machine'), undefined);
  assert.equal(getProductBySlug(undefined), undefined);
});

test('company and product catalog contain zero unrelated Northfield branding', () => {
  const serialized = JSON.stringify({COMPANY_INFO, PRODUCTS, PRODUCT_CATEGORIES}).toLowerCase();
  assert.equal(serialized.includes('northfield'), false);
  assert.equal(COMPANY_INFO.brandName, 'SGPKOREA');
  assert.equal(COMPANY_INFO.legalName, 'SEGAE PRECISION CO., LTD.');
});
