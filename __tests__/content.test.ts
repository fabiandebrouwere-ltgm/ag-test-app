/**
 * Integration Tests for Content Configuration
 * 
 * These tests verify that the content.json structure is valid and complete
 */
import content from '@/content.json';

describe('Content Configuration (content.json)', () => {
    describe('Site Configuration', () => {
        it('has required site properties', () => {
            expect(content.site).toBeDefined();
            expect(content.site.title).toBeDefined();
            expect(content.site.description).toBeDefined();
        });

        it('site title is a non-empty string', () => {
            expect(typeof content.site.title).toBe('string');
            expect(content.site.title.length).toBeGreaterThan(0);
        });
    });

    describe('Hero Configuration', () => {
        it('has required hero properties', () => {
            expect(content.hero).toBeDefined();
            expect(content.hero.greeting).toBeDefined();
            expect(content.hero.subtitle).toBeDefined();
            expect(content.hero.description).toBeDefined();
        });

        it('hero greeting is "Hello, World!" by default', () => {
            expect(content.hero.greeting).toBe('Hello, World!');
        });
    });

    describe('Features Configuration', () => {
        it('has at least one feature', () => {
            expect(Array.isArray(content.features)).toBe(true);
            expect(content.features.length).toBeGreaterThan(0);
        });

        it('each feature has title and description', () => {
            content.features.forEach((feature, index) => {
                expect(feature.title).toBeDefined();
                expect(feature.description).toBeDefined();
                expect(typeof feature.title).toBe('string');
                expect(typeof feature.description).toBe('string');
            });
        });
    });

    describe('Footer Configuration', () => {
        it('has footer text', () => {
            expect(content.footer).toBeDefined();
            expect(content.footer.text).toBeDefined();
            expect(typeof content.footer.text).toBe('string');
        });
    });
});
