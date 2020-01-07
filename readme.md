"this" should be watched carefully. it should be the one of the delegated class.  
had to put setTimeout afte user.fetch. user.fetch has promises, so it is async.  
i allowed duplication of "data" in User and in Attributes. be carefull.  
instead of using setTimeout and wait for users.fetch(), use users.on(), it reacts as soon as users are fetched  