export function toggleLesson(modules, lesson){
    return {
        type: 'TOGGLE_LESSON',
        modules,
        lesson,
    };
}