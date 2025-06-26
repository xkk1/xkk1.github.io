# 中文乱码

## 速查表

| xxxxxx | 示例                      | 特点                          | 产生原因                                 |
| ------ | ----------------------- | --------------------------- | ------------------------------------ |
| 古文码    | 濂藉ソ瀛︿範锛屽ぉ澶╁悜涓�          | 大都为不认识的古文，并加杂日韩文            | UTF-8 编码文件， GBK 编码读取                 |
| 口字码    | �ú�ѧϰ����������         | 大部分字符为问号方块                  | GBK 编码文件， UTF-8 编码读取                 |
| 符号码    | å¥½å¥½å­¦ä¹ ï¼å¤©å¤©åä¸ | 大部分字符为各种符号                  | UTF-8 编码文件， ISO8859-1 编码读取           |
| 拼音码    | ºÃºÃÑ§Ï°£¬ÌìÌìÏòÉÏ      | 大部分字符为头顶带有各种类似声调符号的字母       | UTF-8 编码文件， GBK 编码读取保存，再用 UTF-8 编码读取 |
| 问句码    | 好好学习，天天向�?              | 字符串长度为偶数时正确，长度为奇数时最后的字符变为问号 | UTF-8 编码文件， GBK 编码读取保存，再用 UTF-8 编码读取 |
| 锟拷码    | 锟矫猴拷学习锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷   | 全中文字符，且大部分字符为“锟斤拷”这几个字符     | GBK 编码文件， UTF-8 编码读取保存，再用 GBK 编码读取   |
| 烫烫烫    | 烫烫烫烫烫烫烫烫烫               | 字符显示为“烫烫烫”这几个字符             | VC Debug 模式下未初始化的栈内存会被填充 0xCC        |
| 屯屯屯    | 屯屯屯屯屯屯屯屯屯               | 字符显示为“屯屯屯”这几个字符             | VC Debug 模式下未初始化的堆内存会被填充 0xCD        |

> https://github.com/justjavac/unicode-encoding-error-table

## Python

```python
class strende(str):
    def ende(self, en="utf-8", de="utf-8"):
        """编码字符串，默认 errors='replace'"""
        return strende(self.encode(encoding=en, errors="replace").decode(de, errors="replace"))

s = strende("好好学习，天天向上")

print("原始字符串")
print(s)

print("\n古文码（UTF-8 编码文件， GBK 编码读取）")
print(s.ende("UTF-8", "GBK"))

print("\n口字码（GBK 编码文件， UTF-8 编码读取）")
print(s.ende("GBK", "UTF-8"))

print("\n符号码（UTF-8 编码文件， ISO8859-1 编码读取）")
print(s.ende("UTF-8", "ISO8859-1"))

print("\n拼音码（GBK 编码文件， ISO8859-1 编码读取）")
print(s.ende("GBK", "ISO8859-1"))

print("\n问句码（UTF-8 编码文件， GBK 编码读取保存，再用 UTF-8 编码读取）")
print(s.ende("UTF-8", "GBK").ende("GBK", "UTF-8"))

print("\n锟斤拷（GBK 编码文件， UTF-8 编码读取保存，再用 GBK 编码读取）")
print(s.ende("GBK", "UTF-8").ende("UTF-8", "GBK"))

print("\n烫烫烫（VC Debug 模式下未初始化的栈内存会被填充 0xCC）")
print((b'\xcc' * len(s) * 2).decode("GBK", errors="replace"))

print("\n屯屯屯（VC Debug 模式下未初始化的堆内存会被填充 0xCD）")
print((b'\xcd' * len(s) * 2).decode("GBK", errors="replace"))
```

```
原始字符串
好好学习，天天向上

古文码（UTF-8 编码文件， GBK 编码读取）
濂藉ソ瀛︿範锛屽ぉ澶╁悜涓�

口字码（GBK 编码文件， UTF-8 编码读取）
�ú�ѧϰ����������

符号码（UTF-8 编码文件， ISO8859-1 编码读取）
å¥½å¥½å­¦ä¹ ï¼å¤©å¤©åä¸

拼音码（GBK 编码文件， ISO8859-1 编码读取）
ºÃºÃÑ§Ï°£¬ÌìÌìÏòÉÏ

问句码（UTF-8 编码文件， GBK 编码读取保存，再用 UTF-8 编码读取）
好好学习，天天向�?

锟斤拷（GBK 编码文件， UTF-8 编码读取保存，再用 GBK 编码读取）
锟矫猴拷学习锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷

烫烫烫（VC Debug 模式下未初始化的栈内存会被填充 0xCC）
烫烫烫烫烫烫烫烫烫

屯屯屯（VC Debug 模式下未初始化的堆内存会被填充 0xCD）
屯屯屯屯屯屯屯屯屯
```
