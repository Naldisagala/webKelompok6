import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
@Input() set post(post: Post){
  if(post){
    this.form.patchValue(post)
  }
}  
  form: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) { 
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
     
      
   
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.modal.close(this.form.value);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Employee was updated successfully',
        showConfirmButton: false,
        timer: 1800
      })
    }
  }

   
}