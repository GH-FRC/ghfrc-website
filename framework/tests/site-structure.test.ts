import { describe, expect, it } from 'vitest';

import {
  buildSiteNavigationItems,
  localizedPageHref,
  resolveLegacySectionRoute,
  sitePagePlan,
} from '../src/site-structure';

const labels = {
  'overview': '关于 FRC',
  'about-organization': '关于 Website Template',
  events: '活动',
  projects: '机器人',
  achievements: '赛事成果',
  news: '新闻动态',
  sponsors: '赞助商',
  contact: '联系我们',
};

describe('site page structure', () => {
  it('publishes all eight Preview navigation destinations as independent routes', () => {
    expect(sitePagePlan.map(({ id, contentId }) => [id, contentId])).toEqual([
      ['overview', 'overview'],
      ['about-organization', 'about'],
      ['events', 'events'],
      ['projects', 'projects'],
      ['achievements', 'achievements'],
      ['news', 'news'],
      ['sponsors', 'sponsors'],
      ['contact', 'contact'],
    ]);
  });

  it('marks only the current independent page in global navigation', () => {
    const items = buildSiteNavigationItems(labels, 'projects', 'en');

    expect(items.filter(({ isCurrent }) => isCurrent)).toEqual([
      expect.objectContaining({ href: '/en/projects/', label: '机器人' }),
    ]);
    expect(items.every(({ href }) => href.startsWith('/'))).toBe(true);
  });

  it('builds localized page paths with stable English slugs', () => {
    expect(localizedPageHref('zh-cn', 'overview')).toBe('/zh-cn/overview/');
    expect(localizedPageHref('zh-hant', 'overview')).toBe('/zh-hant/overview/');
    expect(localizedPageHref('en', 'overview')).toBe('/en/overview/');
  });

  it('maps legacy homepage section hashes to their independent routes', () => {
    expect(resolveLegacySectionRoute('#overview')).toBe('/overview/');
    expect(resolveLegacySectionRoute('#unused-section')).toBeUndefined();
    expect(resolveLegacySectionRoute('#about-organization')).toBe('/about/');
    expect(resolveLegacySectionRoute('#events')).toBe('/events/');
    expect(resolveLegacySectionRoute('#projects')).toBe('/projects/');
    expect(resolveLegacySectionRoute('#achievements')).toBe('/achievements/');
    expect(resolveLegacySectionRoute('#news')).toBe('/news/');
    expect(resolveLegacySectionRoute('#sponsors')).toBe('/sponsors/');
    expect(resolveLegacySectionRoute('#contact')).toBe('/contact/');
    expect(resolveLegacySectionRoute('#unknown')).toBeUndefined();
  });
});
