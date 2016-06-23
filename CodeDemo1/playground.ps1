function sum
{
    param(
     $n
    )


    $sum = 1

    for($i = 2; $i -le $n; $i++)
    {
        $sum = $sum + $i
    }

    $sum

}

function product
{
    param(
        $n
    )

    $product = 1

    for($i = 2; $i -le $n; $i++)
    {
        $product = $product * $i
    }

    $product


}

$add = {
    param(
        $a,
        $b
    )

    $a + $b

}

$plus = {
    param(
        $a,
        $b
    )

    $a * $b

}


function calc
{
    param(
        $n,
        $ops
    )

    $product = 1

    for($i = 2; $i -le $n; $i++)
    {
        $product = & $ops $product  $i
    }

    $product


}

#sum 10
#product 10

# calc 8 $add

function factoryFun
{
    param(
        $ops
    )
    {
        param(
            $a,
            $b
        )
        "$a" + "$ops" + "$b"
    }.GetNewClosure()
}


$haha = factoryFun '$$$$'


# calc 8 $haha

function AddRec
{
    param(
     $n
    )

    if ($n -eq 1)
    {
        1
    }
    else
    {
        $n + $(AddRec $($n - 1))
    }


}

# AddRec 8

function showFile
{
    param(
        $folder
    )

    dir $folder | ?{ $_ -is [System.IO.DirectoryInfo]} | %{showFile $_.FullName}
    dir $folder

}

showFile