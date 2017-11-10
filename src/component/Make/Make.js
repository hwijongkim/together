import React, { Component } from 'react';
import { ref } from '../../database';
import Make1 from './Make1';
import Make2 from './Make2';
import Make3 from './Make3';

import '../Header/Header.css';
import './Make.css';

class Make extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNav: 0,
      key: null,
    };
  }

  nextPageNav() {
    if(this.state.key == null){
      this.state.key = ref.child('books').push().getKey();
    }
    if(this.state.pageNav < 3) {
      this.state.pageNav++;
    }
    if(this.state.pageNav === 1) {
      const make1Val = document.querySelectorAll('.Make1 input');

      ref.child('books/'+this.state.key).set({
        bookName: make1Val[0].value,
        bookPurpose: make1Val[1].value,
        bookMoney: make1Val[2].value,
        bookDate: make1Val[3].value,
        bookNextMonth: make1Val[4].value,
      });

      document.getElementsByClassName('HeaderLeft')[0].innerHTML = '이전';
      document.getElementsByClassName('HeaderCenter')[0].innerHTML = '자산 추가';
      document.getElementsByClassName('HeaderRight')[0].innerHTML = '공유하기';
      document.getElementsByClassName('Make1')[0].style.display = 'none';
      document.getElementsByClassName('Make2')[0].style.display = 'block';
      document.getElementsByClassName('Make3')[0].style.display = 'none';
    }else if(this.state.pageNav === 2) {

      const make2Val = document.querySelectorAll('.Make2 input');

      ref.child('books/'+this.state.key+'/assets/'+make2Val[0].value).set({
        assetName: make2Val[0].value,
        assetType: make2Val[1].value,
        assetBalanc: make2Val[2].value,
      });

      document.getElementsByClassName('HeaderLeft')[0].innerHTML = '이전';
      document.getElementsByClassName('HeaderCenter')[0].innerHTML = '공유하기';
      document.getElementsByClassName('HeaderRight')[0].innerHTML = '완료';
      document.getElementsByClassName('Make1')[0].style.display = 'none';
      document.getElementsByClassName('Make2')[0].style.display = 'none';
      document.getElementsByClassName('Make3')[0].style.display = 'block';

      document.querySelectorAll('.Make3 input')[0].value = this.state.key;
    }else if(this.state.pageNav === 3){
      alert('가계부가 성공적으로 생성되었습니다!');
    }
  }
  prevPageNav() {
    if (this.state.pageNav > 0) {
      this.state.pageNav--;
    }
    if(this.state.pageNav === 0) {
      document.getElementsByClassName('HeaderLeft')[0].innerHTML = '취소';
      document.getElementsByClassName('HeaderCenter')[0].innerHTML = '가계부 만들기';
      document.getElementsByClassName('HeaderRight')[0].innerHTML = '자산추가';
      document.getElementsByClassName('Make1')[0].style.display = 'block';
      document.getElementsByClassName('Make2')[0].style.display = 'none';
      document.getElementsByClassName('Make3')[0].style.display = 'none';
    }else if(this.state.pageNav === 1) {
      document.getElementsByClassName('HeaderLeft')[0].innerHTML = '이전';
      document.getElementsByClassName('HeaderCenter')[0].innerHTML = '자산 추가';
      document.getElementsByClassName('HeaderRight')[0].innerHTML = '공유하기';
      document.getElementsByClassName('Make1')[0].style.display = 'none';
      document.getElementsByClassName('Make2')[0].style.display = 'block';
      document.getElementsByClassName('Make3')[0].style.display = 'none';
    }
  }


  render() {
    return (
      <div className="Make">
        <div className="Header">
          <p className="HeaderLeft" onClick={this.prevPageNav.bind(this)}>취소</p>
          <p className="HeaderCenter">가계부 만들기</p>
          <p className="HeaderRight" onClick={this.nextPageNav.bind(this)}>자산 추가</p>
        </div>
        <Make1 />
        <Make2 />
        <Make3 />
      </div>
    );
  }
}

export default Make;
