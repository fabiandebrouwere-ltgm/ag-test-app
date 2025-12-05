/**
 * End-to-End Tests for Hello World App
 * 
 * These tests run in real browsers and capture screenshots for visual verification
 */
import { test, expect } from '@playwright/test';

test.describe('Hello World App - E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display the main heading', async ({ page }) => {
        const heading = page.locator('#main-heading');
        await expect(heading).toBeVisible();
        await expect(heading).toContainText('Hello, World!');

        // Take screenshot of the hero section
        await page.screenshot({
            path: 'test-results/screenshots/hero-section.png',
            fullPage: false
        });
    });

    test('should display all feature cards', async ({ page }) => {
        const features = page.locator('h3');
        await expect(features).toHaveCount(3);

        // Take screenshot of features
        await page.screenshot({
            path: 'test-results/screenshots/features-section.png',
            fullPage: true
        });
    });

    test('should have working navigation links', async ({ page }) => {
        // Check GitHub link
        const githubLink = page.getByRole('link', { name: /view on github/i });
        await expect(githubLink).toBeVisible();
        await expect(githubLink).toHaveAttribute('href', 'https://github.com');

        // Check Learn More link
        const learnMoreLink = page.getByRole('link', { name: /learn more/i });
        await expect(learnMoreLink).toBeVisible();
    });

    test('should be responsive on mobile', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        // Verify content is still visible
        await expect(page.locator('#main-heading')).toBeVisible();

        // Take mobile screenshot
        await page.screenshot({
            path: 'test-results/screenshots/mobile-view.png',
            fullPage: true
        });
    });

    test('should load within acceptable time', async ({ page }) => {
        const startTime = Date.now();
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        const loadTime = Date.now() - startTime;

        // Page should load in under 5 seconds
        expect(loadTime).toBeLessThan(5000);
    });

    test('full page screenshot for visual regression', async ({ page }) => {
        // Wait for all animations to settle
        await page.waitForTimeout(1000);

        // Take full page screenshot
        await page.screenshot({
            path: 'test-results/screenshots/full-page.png',
            fullPage: true
        });
    });

    test('should have proper meta tags', async ({ page }) => {
        // Check that the page has a title
        await expect(page).toHaveTitle(/Hello World/i);
    });
});
