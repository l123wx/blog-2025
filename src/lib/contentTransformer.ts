import transformCssToReactNative, { type Style } from 'css-to-react-native';

export function transform(content: string) {
  // 替换匹配到的标签，处理style属性
  const transformedContent = content.replace(
    /(<\w+)([^>]*?)(style=["'])(.*?)(["'])([^>]*>)/g,
    (match, tagStart, beforeStyle, styleAttr, styleValue, quote, tagEnd) => {
      // 使用cssToReactStyle处理样式
      const reactStyleObj = cssToReactStyle(styleValue);
      // 将样式对象转换为字符串形式的JSON
      const reactStyleStr = JSON.stringify(reactStyleObj);
      
      // 替换原来的style属性为React风格的style对象
      return `${tagStart}${beforeStyle}style={${reactStyleStr}}${tagEnd}`;
    }
  );

  console.log(transformedContent);

  return transformedContent;
}

export function cssToReactStyle(cssString?: string): Style {
  if (!cssString) return {};

  const styles = cssString.split(';')
    .filter(style => style.trim() !== '')
    .map(style => style.split(':').map(it => it.trim()) as [string, string])

  return transformCssToReactNative(styles)
}