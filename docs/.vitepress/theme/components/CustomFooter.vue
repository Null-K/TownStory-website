<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-links">
        <h3>友情链接 & 赞助商</h3>
        <div class="links-container">
          <a href="https://www.dkdun.cn/" target="_blank" class="link-item">林枫云</a>
          <a href="https://www.minecraft.net/" target="_blank" class="link-item">Minecraft</a>
          <a href="https://www.minebbs.com/" target="_blank" class="link-item">MineBBS</a>
          <a href="#" class="link-item more">更多 →</a>
        </div>
      </div>
      
      <div class="footer-info">
        <p class="footer-message">Made with ❤️ for PuddingKC</p>
        <p class="footer-copyright">
          © 2026 TownStory. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 2rem 24px 1.5rem;
  background: var(--vp-c-bg);
}

.footer-content {
  max-width: 1152px;
  margin: 0 auto;
}

.footer-links {
  margin-bottom: 2rem;
}

.footer-links h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.link-item {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.2s ease;
}

.link-item:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.link-item.more {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  font-weight: 500;
}

.link-item.more:hover {
  background: var(--vp-c-brand);
  color: white;
}

.footer-info {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.footer-message {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem 0;
}

.footer-copyright {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.footer-copyright a {
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-copyright a:hover {
  color: var(--vp-c-brand);
}

.separator {
  margin: 0 0.5rem;
}

@media (max-width: 768px) {
  .custom-footer {
    padding: 1.5rem 24px 1rem;
  }

  .links-container {
    gap: 0.5rem;
  }

  .link-item {
    padding: 0.35rem 0.75rem;
    font-size: 0.8rem;
  }
}

@media (min-width: 960px) {
  .custom-footer {
    padding: 2rem 32px 1.5rem;
  }
}

@media (min-width: 1440px) {
  .custom-footer {
    padding: 2rem 64px 1.5rem;
  }
}
</style>
