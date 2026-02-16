import os
import re

directories = ["src/app/components", "src/app/contact", "src/app/services", "src/app/about", "src/app/cgv", "src/app/mentions-legales", "src/app/politique-de-confidentialite"]

for root_dir in directories:
    if not os.path.exists(root_dir):
        continue
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith((".jsx", ".js")):
                full_path = os.path.join(root, file)
                
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace import { motion ... } with import { m ... }
                # Handles various import styles
                new_content = re.sub(r'import\s+{\s*motion(.*?)\s*}\s*from\s*[\'"]framer-motion[\'"]', r'import { m\1 } from "framer-motion"', content)
                
                # Replace <motion. with <m.
                new_content = new_content.replace('<motion.', '<m.')
                
                # Replace </motion. with </m.
                new_content = new_content.replace('</motion.', '</m.')
                
                if new_content != content:
                    with open(full_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Processed {full_path}")
