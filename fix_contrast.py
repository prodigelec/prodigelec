import os
import re

# Migration globale text-gray-200 → text-gray-100
# gray-200 (#e5e7eb) ratio ≈ 4.2:1 ❌
# gray-100 (#f3f4f6) ratio ≈ 5.8:1 ✅

directories = [
    "src/app/components",
    "src/app/contact",
    "src/app/services",
    "src/app/about",
    "src/app/cgv",
    "src/app/mentions-legales",
    "src/app/politique-de-confidentialite"
]

file_count = 0
replacement_count = 0

for root_dir in directories:
    if not os.path.exists(root_dir):
        continue
    
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith((".jsx", ".js")):
                full_path = os.path.join(root, file)
                
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Count occurrences
                occurrences = content.count('text-gray-200')
                
                if occurrences > 0:
                    # Replace text-gray-200 with text-gray-100
                    new_content = content.replace('text-gray-200', 'text-gray-100')
                    
                    with open(full_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    file_count += 1
                    replacement_count += occurrences
                    print(f"✅ {full_path}: {occurrences} replacements")

print(f"\n🎯 Total: {replacement_count} replacements in {file_count} files")
