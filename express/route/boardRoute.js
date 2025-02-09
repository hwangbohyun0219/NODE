const express = require('express')
const router = express.Router();
const connection = require('../db');
router.route("/")
        .get((req,res) => {
            const query = 'SELECT * FROM TBL_BOARD';
            connection.query(query, (err, results) => {
            if(err) {
                console.log('쿼리 실행 실패:', err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.render('board', {list : results});
            });

                connection.query(query, (err, results)=>{
                    if(err) {
                        //에러처리
                        return;
                    }
                    res.render("board", {list : results});
                })

        })

.post((req,res)=>{
        var {boardNo, title, contents} = req.body;
        res.send(`번호 : ${boardNo}, 제목 : ${title}, 내용 : ${contents}`);
    });


router.route("/")
    .get((req,res)=>{
        var data = {
            list : [
                {"boardNo" : 1, "title" : "자바자바", "userId" : "test1"},
                {"boardNo" : 2, "title" : "my sql 연결하자", "userId" : "test1"},
                {"boardNo" : 3, "title" : "자바스크립트 노잼", "userId" : "test1"}
            ],
            message : "success"
        };
    res.render("board", data);
    })
    

router.route("/board/:boardNo")
    .get((req, res)=>{
        //req.params.boardNo 값을 통해서 db 조회 후 화면에 출력
        res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
    })
    .put((req, res)=>{
        //req.params.boardNo 값을 통해서 db 조회 후 화면에 출력
        res.send(`${req.params.boardNo}번 게시글 업데이트`);
    })
    .delete((req, res)=>{
        //req.params.boardNo 값을 통해서 db 조회 후 화면에 출력
        res.send(`${req.params.boardNo}번 게시글 삭제하겠다`);
    });


module.exports = router;

