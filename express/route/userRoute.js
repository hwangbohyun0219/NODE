const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route("/")
    //콜백함수
    .get((req, res)=>{
        const query = 'SELECT * FROM TBL_USER';
            connection.query(query, (err, results) => {
            if(err) {
                console.log('쿼리 실행 실패:', err);
                //res.status(500).send('서버 오류');
                return;
            }
            
            //맵={키/값}:키에 값을 담아 보내는 것
            res.render('user', {list : results});
        });
    })
    
    .post((req,res)=>{
        //insert
        //insert 끝나면 목록으로 이동
        var user = req.body;
        const query = 'INSERT INTO TBL_USER VALUES (?,?,?,?)';
        connection.query(query, [user.id, user.pwd, user.name, user.gender],(err, results) => {
            if(err) {
                console.log('쿼리 실행 실패:', err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.redirect("/user");

            //맵={키/값}:키에 값을 담아 보내는 것
            res.render('user', {list : results});
        });
        console.log(req.body);
    })

    .post((req,res)=>{
        //insert
        //insert 끝나면 목록으로 이동
        var user = req.body;
        const query = 'UPDATE TBL_USER SET PWD =?, NAME =?, GENDER=?, WHEREID=?';
        connection.query(query, [user.id, user.pwd, user.name, user.gender],(err, results) => {
            if(err) {
                console.log('쿼리 실행 실패:', err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.redirect("/user");

            //맵={키/값}:키에 값을 담아 보내는 것
            res.render('user', {list : results});
        });
        console.log(req.body);
    });


router.route("/add")
    .get((req, res)=>{
        res.render("user-add");
    });


    //딴대서 가져다 쓰려고 모듈화
    module.exports = router;