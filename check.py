import os
import re

# We will scan for JSX syntax passing a string ("" or '') to a prop that sounds like a boolean prop.
def scan():
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                    # regex to find props like hidden="xxx" or secureTextEntry="xxx"
                    matches = re.finditer(r'([a-zA-Z0-9_]+)=["\']([^"\']+)["\']', content)
                    for match in matches:
                        prop = match.group(1)
                        val = match.group(2)
                        # commonly boolean props:
                        if prop in ['hidden', 'secureTextEntry', 'loading', 'disabled', 'visible', 'animating', 'enabled', 'transparent', 'headerShown']:
                            print(f"{path}: {prop}={val}")

if __name__ == '__main__':
    scan()
