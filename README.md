jQuery.numbOnly
==================

A jQuery plugin allows only numerics in HTML inputs.

USAGE
-----

<script type="text/javascript">
    $(document).ready(function(){
        $('#element').numbOnly(options);
    });
</script>

options
-------

'align' : 'left'/'right'    Default : 'right'
        text alignment in input.

'negative' : boolean    Default : False
        Allow one minus(-) sign in input.

'decimal' : boolean     Default : True
        Allow decimal(.) once in input.