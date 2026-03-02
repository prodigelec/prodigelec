import os
import re

# Audit complet des problèmes de contraste potentiels
# Recherche de toutes les classes Tailwind avec opacité < 90%

problems = []

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    for i, line in enumerate(lines, 1):
        # Recherche text-white/XX où XX < 90
        matches = re.findall(r'text-white/(\d+)', line)
        for opacity in matches:
            if int(opacity) < 90:
                problems.append({
                    'file': filepath,
                    'line': i,
                    'issue': f'text-white/{opacity}',
                    'ratio_est': round(float(opacity) / 100 * 21, 1),  # Estimation grossière
                    'content': line.strip()[:100]
                })
        
        # Recherche opacity-XX où XX < 90
        matches = re.findall(r'opacity-(\d+)', line)
        for opacity in matches:
            if int(opacity) < 90 and 'text' in line.lower():
                problems.append({
                    'file': filepath,
                    'line': i,
                    'issue': f'opacity-{opacity}',
                    'ratio_est': round(float(opacity) / 100 * 21, 1),
                    'content': line.strip()[:100]
                })

# Scan all JSX files
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js')):
            check_file(os.path.join(root, file))

print(f"🔍 Audit de contraste - {len(problems)} problèmes potentiels trouvés:\n")

if problems:
    for p in sorted(problems, key=lambda x: x['ratio_est']):
        print(f"❌ {p['file']}:{p['line']}")
        print(f"   Issue: {p['issue']} (ratio estimé: {p['ratio_est']}:1)")
        print(f"   Code: {p['content']}\n")
else:
    print("✅ Aucun problème détecté !")
