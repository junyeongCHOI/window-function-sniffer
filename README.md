# Window function sniffer

sniffing window function.

function sniff(target: string, before: (arg: any) => any, after: (result: any) => any): void;

# Example

```javascript
import sniff from 'window-function-sniffer';

sniff(
  'JSON.stringify',
  (arg) => {
    console.log('arg', arg);
  },
  (result) => {
    console.log('arg', result);
  }
);

JSON.stringify({ hello: 'world' });
```
