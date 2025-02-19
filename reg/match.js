

const str=`
<script>
    const a=0;
    const b=0;
</script>
<script>
    const d=0;
</script>
`

const reg=/<script>([\s\S]+?)<\/script>/

console.log(str.match(reg))
