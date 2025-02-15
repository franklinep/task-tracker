type TaskStatus = 'todo' | 'in-progress' | 'done';
export interface Task {
    id: number;
    description: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
}

