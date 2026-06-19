(function() {
    'use strict';

    const siteConfig = {
        baseUrl: 'https://main-official-hth.com.cn',
        keyword: '华体会',
        tipPrefix: '💡 提示',
        badgeLabel: '热门'
    };

    const cardData = [
        { id: 1, title: '欢迎使用', content: '探索 ' + siteConfig.keyword + ' 的精彩世界', url: siteConfig.baseUrl },
        { id: 2, title: '快速入门', content: '点击下方按钮开始体验', url: siteConfig.baseUrl + '/guide' },
        { id: 3, title: '联系支持', content: '如有问题请访问帮助中心', url: siteConfig.baseUrl + '/help' }
    ];

    const keywordBadges = [
        { text: siteConfig.keyword + '活动', color: '#e74c3c' },
        { text: siteConfig.keyword + '资讯', color: '#3498db' },
        { text: siteConfig.keyword + '下载', color: '#2ecc71' }
    ];

    function createCardElement(card) {
        var cardDiv = document.createElement('div');
        cardDiv.className = 'site-card';
        cardDiv.style.cssText = 'background:#fff;border:1px solid #ddd;border-radius:8px;padding:15px;margin:10px 0;box-shadow:0 2px 4px rgba(0,0,0,0.1);';

        var titleEl = document.createElement('h3');
        titleEl.textContent = card.title;
        titleEl.style.cssText = 'margin:0 0 10px;color:#333;font-size:18px;';

        var contentEl = document.createElement('p');
        contentEl.textContent = card.content;
        contentEl.style.cssText = 'margin:0 0 10px;color:#666;font-size:14px;';

        var linkEl = document.createElement('a');
        linkEl.href = card.url;
        linkEl.textContent = '了解更多';
        linkEl.target = '_blank';
        linkEl.style.cssText = 'color:#3498db;text-decoration:none;font-weight:bold;';

        cardDiv.appendChild(titleEl);
        cardDiv.appendChild(contentEl);
        cardDiv.appendChild(linkEl);

        return cardDiv;
    }

    function createBadgeElement(badge) {
        var span = document.createElement('span');
        span.textContent = badge.text;
        span.style.cssText = 'display:inline-block;background:' + badge.color + ';color:#fff;padding:4px 8px;border-radius:12px;font-size:12px;margin:3px;';

        return span;
    }

    function createTipElement(text) {
        var tipDiv = document.createElement('div');
        tipDiv.style.cssText = 'background:#f9f9f9;border-left:4px solid #3498db;padding:10px;margin:10px 0;font-size:14px;color:#555;';
        tipDiv.textContent = siteConfig.tipPrefix + ': ' + text;

        return tipDiv;
    }

    function renderCards(containerId) {
        var container = document.getElementById(containerId);
        if (!container) {
            console.warn('Container element not found: ' + containerId);
            return;
        }

        cardData.forEach(function(card) {
            var cardElement = createCardElement(card);
            container.appendChild(cardElement);
        });
    }

    function renderBadges(containerId) {
        var container = document.getElementById(containerId);
        if (!container) {
            console.warn('Container element not found: ' + containerId);
            return;
        }

        keywordBadges.forEach(function(badge) {
            var badgeElement = createBadgeElement(badge);
            container.appendChild(badgeElement);
        });
    }

    function renderTips(containerId) {
        var container = document.getElementById(containerId);
        if (!container) {
            console.warn('Container element not found: ' + containerId);
            return;
        }

        var tipText = '本站使用 ' + siteConfig.keyword + ' 相关内容，请通过 ' + siteConfig.baseUrl + ' 访问官方信息。';
        var tipElement = createTipElement(tipText);
        container.appendChild(tipElement);
    }

    function initSiteHelper() {
        renderCards('helper-cards');
        renderBadges('helper-badges');
        renderTips('helper-tips');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSiteHelper);
    } else {
        initSiteHelper();
    }
})();