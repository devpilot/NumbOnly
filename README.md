# Warning!
Plugin is no longer maintined, please use HTML `<input type="number" />` instead

# jQuery.numbOnly

A jQuery plugin allows only numerics in HTML inputs. It has option for allowing 
negative and decimal also. On wrong input display popup tip.

## Usage

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
Text alignment in input. Default: `'right'`

```javascript
'negative' : boolean
```
Allow one minus(-) sign in input. Default : `False`

```javascript
'decimal' : boolean
```
Allow decimal(.) once in input. Default : `True`

```javascript
'showTip' : boolean
```
Show tip message on wrong input. Default : `True`

```javascript
'message' : '<Custom message to display in tip>'
```

## License

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) 
and [GPL](http://www.gnu.org/licenses/gpl.html) licenses.
