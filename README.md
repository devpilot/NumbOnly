jQuery.numbOnly
==================

A jQuery plugin allows only numerics in HTML inputs. It has option for allowing negative and decimal also.

USAGE
-----
```html
    <script type="text/javascript">
        $(document).ready(function(){
            $('#element').numbOnly(options);
        });
    </script>
```

### Options

```javascript
    'align' : 'left'/'right'
```
Text alignment in input. Default: 'right'

```javascript
    'negative' : boolean
```
Allow one minus(-) sign in input. Default : False

```javascript
    'decimal' : boolean
```
Allow decimal(.) once in input. Default : True