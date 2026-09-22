

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const outputContainer = document.getElementById('outputContainer');
    const symbolButtons = document.querySelectorAll('.symbol-btn');
    
    // Small Caps Map using safe standard character definitions
    const smallCapsMap = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
    j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
    s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
    };
    
    function toSmallCaps(str) {
    return str.toLowerCase().split('').map(char => smallCapsMap[char] || char).join('');
    }
    
    function generateStyles() {
    const rawText = nameInput.value.trim() || '';
    const smallCaps = toSmallCaps(rawText);
    
    const styles = [
    'ᴅᴀ༒' + smallCaps + '™',
    'ᴅᴀ༒' + smallCaps + '✿',
    'ᴅᴀ༒ ' + smallCaps + 'ღ',
    '꧁ᴅᴀ༒' + smallCaps + '™꧂',
    'ᴅᴀ༒' + smallCaps + '★',
    '亗ᴅᴀ༒' + smallCaps + '亗',
    'ᴅᴀ༒' + smallCaps + '乄',
    'ᴅᴀ༒' + smallCaps + '¥',
    '⚜️ᴅᴀ༒' + smallCaps + '⚜️'
    ];
    
    outputContainer.innerHTML = '';
    
    styles.forEach(styleText => {
    const item = document.createElement('div');
    item.className = 'output-item';
    
    const textSpan = document.createElement('span');
    textSpan.className = 'styled-text';
    textSpan.textContent = styleText;
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    
    copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(styleText).then(() => {
    copyBtn.textContent = 'Copied!';
    copyBtn.style.background = '#2ea44f';
    copyBtn.style.color = '#fff';
    setTimeout(() => {
    copyBtn.textContent = 'Copy';
    copyBtn.style.background = 'var(--accent-color)';
    copyBtn.style.color = '#000';
    }, 1500);
    });
    });
    
    item.appendChild(textSpan);
    item.appendChild(copyBtn);
    outputContainer.appendChild(item);
    });
    }
    
    // Symbol click handler
    symbolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
    nameInput.value += btn.textContent.trim();
    generateStyles();
    });
    });
    
    // Real-time input handling
    nameInput.addEventListener('input', generateStyles);
    
    // Initial execution
    generateStyles();
    });