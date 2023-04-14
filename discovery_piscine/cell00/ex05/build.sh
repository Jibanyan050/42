if [ "$*" == "" ]; then
    echo "No argument provided"
else
    for arg in "$@"
    do
        touch "ex$arg"
    done
fi
