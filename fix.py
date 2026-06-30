import os

fp = r"F:\个人主页\personal-site\src\components\layout\Header.tsx"
content = open(fp, "r", encoding="utf-8").read()
content = content.replace(">ZS<", ">贾而比<")
open(fp, "w", encoding="utf-8").write(content)
print("Done: ZS -> 贾而比")
