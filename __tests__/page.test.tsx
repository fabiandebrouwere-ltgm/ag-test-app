/**
 * Unit Tests for Home Page Component
 * 
 * These tests verify that the Home page correctly renders content from content.json
 */
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import content from '@/content.json';

describe('Home Page', () => {
    beforeEach(() => {
        render(<Home />);
    });

    describe('Hero Section', () => {
        it('renders the main greeting from content.json', () => {
            const heading = screen.getByRole('heading', { level: 1 });
            expect(heading).toHaveTextContent(content.hero.greeting);
        });

        it('renders the subtitle from content.json', () => {
            expect(screen.getByText(content.hero.subtitle)).toBeInTheDocument();
        });

        it('renders the description from content.json', () => {
            expect(screen.getByText(content.hero.description)).toBeInTheDocument();
        });
    });

    describe('Features Section', () => {
        it('renders all features from content.json', () => {
            content.features.forEach((feature) => {
                expect(screen.getByText(feature.title)).toBeInTheDocument();
                expect(screen.getByText(feature.description)).toBeInTheDocument();
            });
        });

        it('renders the correct number of feature cards', () => {
            const featureTitles = content.features.map((f) => f.title);
            featureTitles.forEach((title) => {
                expect(screen.getByText(title)).toBeInTheDocument();
            });
        });
    });

    describe('Footer Section', () => {
        it('renders footer text from content.json', () => {
            expect(screen.getByText(content.footer.text)).toBeInTheDocument();
        });
    });

    describe('Navigation Links', () => {
        it('renders GitHub link', () => {
            const githubLink = screen.getByRole('link', { name: /view on github/i });
            expect(githubLink).toHaveAttribute('href', 'https://github.com/fabiandebrouwere-ltgm/ag-test-app');
            expect(githubLink).toHaveAttribute('target', '_blank');
        });

        it('renders Learn More link', () => {
            const learnMoreLink = screen.getByRole('link', { name: /learn more/i });
            expect(learnMoreLink).toHaveAttribute('href', '#learn-more');
        });
    });

    describe('Accessibility', () => {
        it('has a main heading with id for targeting', () => {
            const heading = screen.getByRole('heading', { level: 1 });
            expect(heading).toHaveAttribute('id', 'main-heading');
        });
    });
});
