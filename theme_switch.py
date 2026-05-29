import os
import re

TARGET_DIR = r"c:\Users\user\3D Objects\New folder\FTID_Citizen\src"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Backgrounds
    content = content.replace('bg-[#02010a]', 'bg-slate-50')
    content = content.replace('bg-black', 'bg-slate-50')
    
    # 2. Text colors
    content = re.sub(r'text-white/([0-9]+)', r'text-slate-900/\1', content)
    content = content.replace('text-white', 'text-slate-900')
    content = content.replace('text-black', 'text-white') # for inverted buttons
    
    # 3. Glass backgrounds (milky)
    content = content.replace('bg-white/5 ', 'bg-white/60 ')
    content = content.replace('bg-white/5"', 'bg-white/60"')
    content = content.replace('bg-white/10', 'bg-white/70')
    content = content.replace('bg-white/20', 'bg-white/80')
    content = content.replace('bg-white/30', 'bg-white/90')

    # 4. Glass borders
    content = content.replace('border-white/5 ', 'border-white/40 ')
    content = content.replace('border-white/5"', 'border-white/40"')
    content = content.replace('border-white/10', 'border-white/50')
    content = content.replace('border-white/20', 'border-white/60')

    # 5. Accent text colors (make them darker for light theme)
    content = content.replace('text-emerald-300', 'text-emerald-700')
    content = content.replace('text-emerald-400', 'text-emerald-700')
    content = content.replace('text-rose-300', 'text-rose-700')
    content = content.replace('text-rose-400', 'text-rose-700')
    content = content.replace('text-cyan-300', 'text-cyan-700')
    content = content.replace('text-cyan-400', 'text-cyan-700')
    content = content.replace('text-blue-300', 'text-blue-700')
    content = content.replace('text-purple-300', 'text-purple-700')
    content = content.replace('text-purple-400', 'text-purple-700')
    content = content.replace('text-pink-400', 'text-pink-700')
    
    # 6. Drop shadows (remove or minimize drop-shadow on dark text)
    content = re.sub(r'drop-shadow-\[.*?\]', '', content)
    content = content.replace('drop-shadow-lg', 'drop-shadow-sm')
    content = content.replace('drop-shadow-md', '')

    # 7. Ambient orbs colors (make them pastel)
    content = content.replace('bg-purple-600/20', 'bg-purple-300/40')
    content = content.replace('bg-blue-600/20', 'bg-blue-300/40')
    content = content.replace('bg-pink-600/10', 'bg-pink-300/40')
    content = content.replace('bg-cyan-600/10', 'bg-cyan-300/40')
    content = content.replace('bg-indigo-600/20', 'bg-indigo-300/40')
    content = content.replace('bg-indigo-600/10', 'bg-indigo-300/40')
    
    # 8. Accent background hues
    content = content.replace('bg-emerald-500/20', 'bg-emerald-100')
    content = content.replace('bg-emerald-500/10', 'bg-emerald-50/50')
    content = content.replace('border-emerald-500/30', 'border-emerald-200')
    content = content.replace('border-emerald-500/20', 'border-emerald-200')

    content = content.replace('bg-rose-500/20', 'bg-rose-100')
    content = content.replace('bg-rose-500/10', 'bg-rose-50/50')
    content = content.replace('border-rose-500/30', 'border-rose-200')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

print("Theme update complete.")
