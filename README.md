jQuery.numbOnly
==================

A jQuery plugin allows only numerics in HTML inputs. It has option for allowing negative and decimal also.

USAGE
-----

    <script type="text/javascript">
        $(document).ready(function(){
            $('#element').numbOnly(options);
        });
    </script>

### Options

    'align' : 'left'/'right'
Text alignment in input. Default: 'right'

    'negative' : boolean
Allow one minus(-) sign in input. Default : False

    'decimal' : boolean
Allow decimal(.) once in input. Default : True