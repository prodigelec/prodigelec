import os
import re

files_to_process = [
    "src/app/components/home/sections/AboutSection.jsx",
    "src/app/components/home/sections/BrandsSection.jsx",
    "src/app/components/home/sections/ContactCTASection.jsx",
    "src/app/components/home/sections/FeaturesSection.jsx",
    "src/app/components/home/sections/hero/HeroBackground.jsx",
    "src/app/components/home/sections/hero/HeroContent.jsx",
    "src/app/components/home/sections/hero/HeroNavigation.jsx",
    "src/app/components/home/sections/hero/HeroProgress.jsx",
    "src/app/components/home/sections/PartnersSection.jsx",
    "src/app/components/home/sections/PricingPolicySection.jsx",
    "src/app/components/home/sections/ProcessSection.jsx",
    "src/app/components/layout/FloatingContactButton.jsx",
    "src/app/components/layout/Navbar/Desktop/index.jsx",
    "src/app/components/layout/Navbar/Logo.jsx",
    "src/app/components/layout/Navbar/Mobile/index.jsx",
    "src/app/components/layout/Navbar/Mobile/TopBar.jsx",
    "src/app/components/services/shared/ServiceCarousel.jsx",
    "src/app/components/services/shared/ServiceCTA.jsx",
    "src/app/components/services/shared/ServiceFAQ.jsx",
    "src/app/components/services/shared/ServiceHero.jsx",
    "src/app/components/services/shared/ServicePricing.jsx",
    "src/app/components/services/shared/ServiceServices.jsx",
    "src/app/components/services/shared/ServiceUrgency.jsx",
    "src/app/components/ui/Button.jsx"
]

for file_path in files_to_process:
    full_path = os.path.join(os.getcwd(), file_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace import { motion ... } with import { m ... }
    content = re.sub(r'import\s+{\s*motion(.*?)\s*}\s*from\s*[\'"]framer-motion[\'"]', r'import { m\1 } from "framer-motion"', content)
    
    # Replace <motion. with <m.
    content = content.replace('<motion.', '<m.')
    
    # Replace </motion. with </m.
    content = content.replace('</motion.', '</m.')
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {file_path}")
