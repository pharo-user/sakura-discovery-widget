

    HOST='andrei@172.105.77.138'
    NF='public9.tgz'
    APP_PATH='/home/andrei/sakura-discovery-widget'

    npm run build

    tar cvzf $NF public/*
    scp $NF $HOST:
    ssh $HOST "rm -r $APP_PATH"
    ssh $HOST "mkdir $APP_PATH"
    ssh $HOST "tar xvzf $NF -C $APP_PATH"
    ssh $HOST "rm /home/andrei/$NF"
