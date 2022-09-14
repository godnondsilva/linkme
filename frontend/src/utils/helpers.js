export const refreshPreview = () => {
    document
        .getElementById('preview-iframe')
        .contentWindow.location.reload(true);
};